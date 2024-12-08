import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion, TargetAndTransition, Variants } from "framer-motion";
import { ShuffleIcon } from "lucide-react";

const textData = ["🍎", "🍊", "🍋", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍", "🥝"];
const ARRAY_REPEAT = 5;

const SlotMachine = () => {
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const textArr = useMemo(() => Array(ARRAY_REPEAT).fill(textData).flat(), []);
  const lastIndex = textArr.length - 1 - count;

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prev) => (prev < lastIndex ? prev + 1 : prev));
      },
      getDuration(10, currentIndex),
    );

    return () => clearInterval(interval);
  }, [currentIndex, lastIndex, count]);

  const variants: Variants = {
    initial: { scaleY: 0.3, y: "-50%", opacity: 0 },
    animate: ({ isLast }): TargetAndTransition => {
      let props: TargetAndTransition = { scaleY: 1, y: 0, opacity: 1 };
      if (!isLast) props["filter"] = "blur(1.5px)";

      return props;
    },
    exit: { scaleY: 0.3, y: "50%", opacity: 0 },
  };

  function handleClick() {
    setCurrentIndex(0);
    setCount((prev) => (prev === textData.length - 1 ? 0 : prev + 1));
  }

  function getDuration(base: number, index: number) {
    return base * (index + 1) * 0.5;
  }

  return (
    <div className="flex justify-between">
      <p>나는</p>
      <AnimatePresence mode="popLayout">
        {textArr.map((text, i) => {
          const isLast = i === lastIndex;
          return (
            i === currentIndex && (
              <motion.p
                key={i}
                className="overflow-hidden text-7xl font-thin"
                custom={{ isLast }}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: getDuration(isLast ? 0.1 : 0.01, i), ease: isLast ? "easeInOut" : "linear" }}
              >
                {text}
              </motion.p>
            )
          );
        })}
      </AnimatePresence>
      <p>입니다.</p>
      <motion.button
        className="mr-[650px]"
        onClick={handleClick}
        whileTap={{ scale: 0.9, scaleY: 1 }}
        whileHover={{ scaleY: -1 }}
      >
        <ShuffleIcon />
      </motion.button>
    </div>
  );
};

export default SlotMachine;
