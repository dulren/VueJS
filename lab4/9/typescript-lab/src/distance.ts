type Point = {
    x: number;
    y: number;
  };
  
  function distance(x1: number, y1: number, x2: number, y2: number): number;
  function distance(p1: Point, p2: Point): number;

  function distance(
    a: number | Point,
    b: number | Point,
    c?: number,
    d?: number
  ): number {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
      const dx = a - c;
      const dy = b - d;
      return Math.sqrt(dx * dx + dy * dy);
    } else if (typeof a === "object" && typeof b === "object") {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.sqrt(dx * dx + dy * dy);
    } else {
      throw new Error("Invalid arguments");
    }
  }
  
  const d1 = distance(0, 0, 3, 4);
  const d2 = distance({ x: 0, y: 0 }, { x: 3, y: 4 });
  
  console.log("d1:", d1);
  console.log("d2:", d2);
