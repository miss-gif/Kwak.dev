import { skills } from "@/data";
import { Bodies, Composite, Engine, Events, Mouse, MouseConstraint, Render, Runner } from "matter-js";
import { useEffect, useRef, useState } from "react";

type SkillData = {
  img: string;
  name: string;
  level: number;
  description: string[];
};

const SkillsCanvas = () => {
  const [selected, setSelected] = useState<SkillData | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const formattedData: Record<string, SkillData> = skills.reduce(
      (acc, skill) => {
        acc[skill.name] = {
          img: skill.img,
          name: skill.name,
          level: Math.ceil(skill.percentage / 20),
          description: skill.description,
        };
        return acc;
      },
      {} as Record<string, SkillData>,
    );

    setSelected(formattedData["React"]);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const cw = 1000;
    const ch = 1000;

    const gravityPower = 0.5;
    let gravityDeg = 0;

    let engine: Engine;
    let render: Render;
    let runner: Runner;
    let mouse: Mouse;
    let mouseConstraint: MouseConstraint;
    let observer: IntersectionObserver;

    const initScene = () => {
      engine = Engine.create();
      render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
        },
      });

      runner = Runner.create();
      Render.run(render);
      Runner.run(runner, engine);
    };

    const initMouse = () => {
      mouse = Mouse.create(canvas);
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          render: { visible: false },
        },
      });
      Composite.add(engine.world, mouseConstraint);

      //TODO : 캔버스 안에서 마우스 휠 이벤트 중지

      /**
       * 이 코드가 있어야 canvas에서 마우스 휠 이벤트를 중지 할 수 있음.
       * canvas.removeEventListener('wheel', mouse.mousewheel)
       * canvas.removeEventListener('DOMMouseScroll', mouse.mousewheel)
       * 24.11.05 수정
       * 배포 문제로 인해 주석처리
       */
      // canvas.removeEventListener('wheel', mouse.mousewheel)
      // canvas.removeEventListener('DOMMouseScroll', mouse.mousewheel)

      Events.on(mouseConstraint, "mousedown", () => {
        const newSelected = mouseConstraint.body && formattedData[mouseConstraint.body.label as keyof typeof formattedData];
        newSelected && setSelected(newSelected);
      });
    };

    const initIntersectionObserver = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            runner.enabled = true;
            Render.run(render);
          } else {
            runner.enabled = false;
            Render.stop(render);
          }
        },
        { threshold: 0.5 },
      );

      observer.observe(canvas);
    };

    const initGround = () => {
      const segment = 32;
      const deg = (Math.PI * 2) / segment;
      const width = 50;
      const radius = cw / 2 + width / 2;
      const height = radius * Math.tan(deg / 2) * 2;

      for (let i = 0; i < segment; i++) {
        const theta = deg * i;
        const x = radius * Math.cos(theta) + cw / 2;
        const y = radius * Math.sin(theta) + ch / 2;
        addRect(x, y, width, height, {
          isStatic: true,
          angle: theta,
        });
      }
    };

    const initSkillIcon = () => {
      Object.entries(formattedData).forEach(([key, { img }]) => {
        const randomX = Math.random() * cw; // 캔버스 너비 내 임의의 x 좌표
        const randomY = Math.random() * ch; // 캔버스 높이 내 임의의 y 좌표
        const scale = 0.7;
        const t1 = { w: 250 * scale, h: 250 * scale };

        const image = new Image();
        image.src = img;
        image.onload = () => {
          addRect(randomX, randomY, t1.w, t1.h, {
            label: key,
            chamfer: { radius: 20 },
            render: {
              sprite: {
                texture: img,
                xScale: scale,
                yScale: scale,
              },
            },
          });
        };
        image.onerror = () => {
          console.error(`이미지 로드 실패: ${img}`);
        };
      });
    };

    const addRect = (x: number, y: number, w: number, h: number, options = {} as any) => {
      const rect = Bodies.rectangle(x, y, w, h, options);
      Composite.add(engine.world, rect);
    };

    initScene();
    initMouse();
    initGround();
    initSkillIcon();
    initIntersectionObserver();

    runner = Runner.create();

    Events.on(runner, "tick", () => {
      gravityDeg += 1;
      engine.world.gravity.x = Math.cos((Math.PI / 100) * gravityDeg) * gravityPower;
      engine.world.gravity.y = Math.sin((Math.PI / 100) * gravityDeg) * gravityPower;
    });

    return () => {
      observer.unobserve(canvas);
      Composite.clear(engine.world, false);
      Mouse.clearSourceEvents(mouse);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-10 lg:flex-row lg:gap-4">
      <canvas ref={canvasRef} className="h-[50vmin] w-[50vmin] rounded-full"></canvas>
      {selected && (
        // 우측 사이드 영역
        <div className="flex min-h-[400px] w-full flex-col">
          <div className="flex flex-col items-center gap-4">
            <h4 className="rounded-xl bg-blue-500 px-8 py-4 text-center text-5xl font-semibold text-white">{selected.name}</h4>
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
            <p>
              {selected.description.map((item, index) => (
                <span key={index} className="text-md leading-8 md:text-xl md:leading-10">
                  {item}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsCanvas;
