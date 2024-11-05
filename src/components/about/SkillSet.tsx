import styled from '@emotion/styled'
import {
  Bodies,
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from 'matter-js'
import { useEffect, useRef, useState } from 'react'

import AXIOS from '@assets/skill_icons/axios.svg'
import JS from '@assets/skill_icons/css.svg'

// Skill data 타입 정의
type SkillData = {
  title: string
  level: number
  description: string
}

const data: Record<string, SkillData> = {
  자바스크립트: { title: JS, level: 4, description: '자바스크립트 설명' },
  CSS: { title: JS, level: 4, description: 'CSS 설명' },
  axios: { title: AXIOS, level: 4, description: 'axios 설명' },
}

const SkillSet = () => {
  const [selected, setSelected] = useState(data['CSS'])
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const cw = 1000
    const ch = 1000

    const gravityPower = 0.5 // 오타 수정
    let gravityDeg = 0

    let engine: Engine
    let render: Render
    let runner: Runner
    let mouse: Mouse
    let mouseConstraint: MouseConstraint
    let observer: IntersectionObserver

    const initScene = () => {
      engine = Engine.create()
      render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
        },
      })

      runner = Runner.create()
      Render.run(render)
      Runner.run(runner, engine)
    }

    const initMouse = () => {
      mouse = Mouse.create(canvas)
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          render: { visible: false },
        },
      })
      Composite.add(engine.world, mouseConstraint)

      /**
       * 이 코드가 있어야 canvas에서 마우스 휠 이벤트를 중지 할 수 있음.
       * canvas.removeEventListener('wheel', mouse.mousewheel)
       * canvas.removeEventListener('DOMMouseScroll', mouse.mousewheel)
       */
      canvas.removeEventListener('wheel', mouse.mousewheel)
      canvas.removeEventListener('DOMMouseScroll', mouse.mousewheel)

      Events.on(mouseConstraint, 'mousedown', () => {
        const newSelected =
          mouseConstraint.body &&
          data[mouseConstraint.body.label as keyof typeof data]
        newSelected && setSelected(newSelected)
        console.log(mouseConstraint.body)
      })
    }

    const initIntersectionObserver = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            runner.enabled = true
            Render.run(render)
          } else {
            runner.enabled = false
            Render.stop(render)
          }
        },
        { threshold: 0.5 },
      )

      observer.observe(canvas)
    }

    const initGround = () => {
      const segment = 32
      const deg = (Math.PI * 2) / segment
      const width = 50
      const radius = cw / 2 + width / 2
      const height = radius * Math.tan(deg / 2) * 2

      for (let i = 0; i < segment; i++) {
        const theta = deg * i
        const x = radius * Math.cos(theta) + cw / 2
        const y = radius * Math.sin(theta) + ch / 2
        addRect(x, y, width, height, {
          isStatic: true,
          angle: theta,
        })
      }
    }

    const initSkillIcon = () => {
      Object.entries(data).forEach(([key, { title }]) => {
        addRect(cw / 2, ch / 2, 100 * 0.7, 100 * 0.7, {
          label: key,
          chamfer: { radius: 20 },
          render: {
            sprite: {
              texture: title,
              xScale: 0.5,
              yScale: 0.5,
            },
          },
        })
      })
    }

    const addRect = (
      x: number,
      y: number,
      w: number,
      h: number,
      options = {} as any,
    ) => {
      const rect = Bodies.rectangle(x, y, w, h, options)
      Composite.add(engine.world, rect)
    }

    initScene()
    initMouse()
    initGround()
    initSkillIcon()
    initIntersectionObserver()

    runner = Runner.create()

    Events.on(runner, 'tick', () => {
      gravityDeg += 1
      engine.world.gravity.x =
        Math.cos((Math.PI / 100) * gravityDeg) * gravityPower
      engine.world.gravity.y =
        Math.sin((Math.PI / 100) * gravityDeg) * gravityPower
    })

    return () => {
      observer.unobserve(canvas)
      Composite.clear(engine.world, false)
      Mouse.clearSourceEvents(mouse)
      Render.stop(render)
      Runner.stop(runner)
      Engine.clear(engine)
    }
  }, [])

  return (
    <div>
      <div className="flex items-center">
        <CanvasStyled ref={canvasRef}></CanvasStyled>
        <AsideStyled>
          <h4 className="text-4xl">{selected.title}</h4>
          <p>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <span
                  key={i}
                  style={{
                    filter: `grayscale(${selected.level <= i ? 1 : 0})`,
                  }}
                >
                  &#11088;
                </span>
              ))}
          </p>
          <p>{selected.description}</p>
        </AsideStyled>
      </div>
    </div>
  )
}

export default SkillSet

const CanvasStyled = styled.canvas`
  width: 50vmin;
  height: 50vmin;
  border-radius: 50%;
`

const AsideStyled = styled.aside`
  width: 50vmin;
`
