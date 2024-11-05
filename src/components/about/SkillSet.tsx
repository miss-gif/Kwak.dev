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

const data = {
  자바스크립트: { title: JS, level: 4, description: '자바스크립트 설명' },
  CSS: { title: JS, level: 4, description: 'CSS 설명' },
  axios: { title: JS, level: 4, description: 'CSS 설명' },
}

const SkillSet = () => {
  const [selected, setSelected] = useState(data['CSS'])
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null
    if (!canvas) return

    let observer

    const cw = 1000
    const ch = 1000

    const garvityPower = 0.5
    let gravityDeg = 0

    let engine: Engine,
      render: Render,
      runner: Runner,
      mouse: Mouse,
      mouseConstraint: MouseConstraint

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

      canvas.removeEventListener('wheel', mouse.mousewheel)
      canvas.removeEventListener('DOMMouseScroll', mouse.mousewheel)
    }
    const initIntersectionObserver = () => {
      const options = {
        threshold: 0.5,
      }
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
          runner.enabled = true
          Render.run(render)
        } else {
          runner.enabled = false
          Render.stop(render)
        }
      }, options)

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
      addRect(cw / 2, ch / 2, 100 * 0.7, 100 * 0.7, {
        label: 'axios',
        chamfer: { radius: 20 },
        render: {
          sprite: {
            texture: AXIOS,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
      addRect(cw / 2, ch / 2, 100 * 0.7, 100 * 0.7, {
        render: {
          sprite: {
            texture: JS,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
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

    Events.on(mouseConstraint, 'mousedown', () => {
      const newSelected =
        mouseConstraint.body && data[mouseConstraint.body.label]

      newSelected && setSelected(newSelected)
      console.log(mouseConstraint.body)
    })

    Events.on(runner, 'tick', () => {
      gravityDeg += 1
      engine.world.gravity.x =
        Math.cos((Math.PI / 100) * gravityDeg) * garvityPower
      engine.world.gravity.y =
        Math.sin((Math.PI / 100) * gravityDeg) * garvityPower
    })

    return () => {
      observer.unobserve(canvas)

      Composite.clear(engine.world)
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
              .map((_, i) => {
                return (
                  <span
                    key={i}
                    style={{
                      filter: `grayscale(${selected.level <= i ? 1 : 0})`,
                    }}
                  >
                    &#11088;
                  </span>
                )
              })}
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
