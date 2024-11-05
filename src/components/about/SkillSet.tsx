import styled from '@emotion/styled'
import {
  Bodies,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from 'matter-js'
import { useEffect, useRef } from 'react'

const SkillSet = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null
    if (!canvas) return

    const cw = 1000
    const ch = 1000

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

    canvas?.addEventListener('wheel', () => {
      addRect(mouse.position.x, mouse.position.y, 50, 50)
    })

    return () => {}
  }, [])

  return (
    <div>
      <div className="flex items-center">
        <CanvasStyled ref={canvasRef}></CanvasStyled>
        <AsideStyled>
          <h4 className="text-4xl">자바스크립트</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            consequuntur ipsa numquam laborum voluptatum, dolores sed odio
            consectetur illum consequatur optio veniam quasi cumque? Molestiae
            veritatis maxime qui numquam laborum! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Reiciendis consequuntur ipsa numquam
            laborum voluptatum, dolores sed odio consectetur illum consequatur
            optio veniam quasi cumque? Molestiae veritatis maxime qui numquam
            laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reiciendis consequuntur ipsa numquam laborum voluptatum, dolores sed
            odio consectetur illum consequatur optio veniam quasi cumque?
            Molestiae veritatis maxime qui numquam laborum! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Reiciendis consequuntur ipsa
            numquam laborum voluptatum, dolores sed odio consectetur illum
            consequatur optio veniam quasi cumque? Molestiae veritatis maxime
            qui numquam laborum! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reiciendis consequuntur ipsa numquam laborum
            voluptatum, dolores sed odio consectetur illum consequatur optio
            veniam quasi cumque? Molestiae veritatis maxime qui numquam laborum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            consequuntur ipsa numquam laborum voluptatum, dolores sed odio
            consectetur illum consequatur optio veniam quasi cumque? Molestiae
            veritatis maxime qui numquam laborum!
          </p>
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
