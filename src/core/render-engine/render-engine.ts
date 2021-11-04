export interface RenderEngineProps {
  canvasElement: HTMLCanvasElement;
}

export class RenderEngine {
  private _canvasElement: HTMLCanvasElement;

  constructor(props: RenderEngineProps) {
    this._canvasElement = props.canvasElement;
  }
}
