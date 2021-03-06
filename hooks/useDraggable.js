import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const clamp = (value, [min, max]) => {
  return Math.min(Math.max(value, min), max)
}

export const getNearestScale = (value, stepSize) => {
  const prevStep = Math.floor(value / stepSize) * stepSize
  const nextStep = Math.ceil(value / stepSize) * stepSize
  return value - prevStep > nextStep - value ? nextStep : prevStep
}

const defaultOptions = {
    prevent: true,
    touch: true,
    mouse: true,
    direction: 'both',
    maxDistance: {
        x: { max: Infinity, min: -Infinity },
        y: { max: Infinity, min: -Infinity },
    },
    stepSize: 0,
    setCSS: true,
    onStart: function () { },
    onMove: function () { },
    onEnd: function () { },
};

export const useDraggable = (options) => {
    const opts = useMemo(() => {
        return {
            ...defaultOptions,
            ...options,
        };
    }, [options]);
    const target = useRef(null);
    const startXY = useRef([0, 0]);
    const prevPosition = useRef([0, 0]);
    const dragging = useRef(false);
    const [position, setPosition] = useState([0, 0]);
    const setTransform = useCallback((position, transition) => {
        if (opts.stepSize) {
            position = [
                getNearestScale(position[0], opts.stepSize),
                getNearestScale(position[1], opts.stepSize),
            ];
        }
        prevPosition.current = position;
        setPosition(position);
        if (target.current && opts.setCSS) {
            if (transition) {
                target.current.style.transition = transition;
            }
            else {
                target.current.style.transition = '';
            }
            target.current.style.transform = `translate3d(${position[0]}px, ${position[1]}px, 0)`;
        }
    }, [opts.setCSS, opts.stepSize]);
    const handleStart = useCallback((e) => {
        const [prevX, prevY] = prevPosition.current;
        let [x, y] = prevPosition.current;
        if (0 /*e instanceof window.TouchEvent && opts.touch */) {
            dragging.current = true;
            x = e.touches[0].clientX - prevX;
            y = e.touches[0].clientY - prevY;
        }
        else if (e instanceof window.MouseEvent &&
            e.button === 0 &&
            opts.mouse) {
            dragging.current = true;
            x = e.clientX - prevX;
            y = e.clientY - prevY;
        }
        else
            return;
        startXY.current = [x, y];
        opts.onStart(target, [x, y], setTransform);
    }, [opts, setTransform]);
    const handleMove = useCallback((e) => {
        if (!dragging.current)
            return;
        if (opts.prevent) {
            e.preventDefault();
        }
        const [startX, startY] = startXY.current;
        let [x, y] = prevPosition.current;
        if (0 /* e instanceof window.TouchEvent && opts.touch */) {
            x = e.touches[0].clientX - startX;
            y = e.touches[0].clientY - startY;
        }
        else if (e instanceof window.MouseEvent &&
            e.button === 0 &&
            opts.mouse) {
            x = e.clientX - startX;
            y = e.clientY - startY;
        }
        else
            return;
        if (opts.stepSize) {
            x = getNearestScale(x, opts.stepSize);
            y = getNearestScale(y, opts.stepSize);
        }
        x =
            opts.direction === 'vertical'
                ? 0
                : clamp(x, [
                    opts.maxDistance?.x?.min ?? -Infinity,
                    opts.maxDistance?.x?.max ?? Infinity,
                ]);
        y =
            opts.direction === 'horizontal'
                ? 0
                : clamp(y, [
                    opts.maxDistance?.y?.min ?? -Infinity,
                    opts.maxDistance?.y?.max ?? Infinity,
                ]);
        opts.onMove(target, [x, y], setTransform);
        setTransform([x, y]);
    }, [dragging, opts, setTransform]);
    const handleEnd = useCallback((e) => {
        if ((0 /* e instanceof window.TouchEvent && opts.touch */) ||
            (e instanceof window.MouseEvent && e.button === 0 && opts.mouse)) {
            dragging.current = false;
            opts.onEnd(target, prevPosition.current, setTransform);
        }
    }, [opts, setTransform]);
    useEffect(() => {
        const node = target.current;
        if (node) {
            if (opts.touch) {
                node.addEventListener('touchstart', handleStart);
                node.addEventListener('touchmove', handleMove, {
                    passive: !opts.prevent,
                });
                document.addEventListener('touchcancel', handleEnd);
                document.addEventListener('touchend', handleEnd);
            }
            if (opts.mouse) {
                node.addEventListener('mousedown', handleStart);
                document.addEventListener('mousemove', handleMove);
                document.addEventListener('mouseup', handleEnd);
            }
        }
        return () => {
            if (node) {
                if (opts.touch) {
                    node.removeEventListener('touchstart', handleStart);
                    node.removeEventListener('touchmove', handleMove);
                    document.removeEventListener('touchcancel', handleEnd);
                }
                if (opts.mouse) {
                    node.removeEventListener('mousedown', handleStart);
                    document.removeEventListener('mousemove', handleMove);
                    document.removeEventListener('mouseup', handleEnd);
                }
            }
        };
    }, [target, opts, handleStart, handleMove, handleEnd]);
    return { target, position, setPosition: setTransform };
};
