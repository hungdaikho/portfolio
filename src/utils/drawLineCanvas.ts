export const drawLineCanvas = () => {
  const canvas: HTMLCanvasElement | any = document.getElementById("canvas");
  const moveToPosition: any = {
    x: -1,
    y: -1,
  };
  if (canvas) {
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "purple";
    canvas.addEventListener("mousemove", (event: any) => {
      if (moveToPosition.x !== -1 && moveToPosition.y !== -1) {
        moveToPosition.x = event.clientX - canvas.offsetLeft;
        moveToPosition.y = event.clientY - canvas.offsetTop;
        ctx.moveTo(moveToPosition.x, moveToPosition.y);
      } else {
        ctx.lineTo(
          event.clientX - canvas.offsetLeft,
          event.clientY - canvas.offsetTop
        );
        ctx.stroke();
        ctx.closePath();
      }
    });
  }
};
