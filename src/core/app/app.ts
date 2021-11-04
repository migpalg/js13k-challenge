// @scripts
import { RenderEngine } from '../render-engine/render-engine';

export interface AppProps {
  rootElement: HTMLElement;
}

export interface AppProps {
  rootElement: HTMLElement;
  renderEngine: RenderEngine;
}

/**
 * Class that contains all the behavior to manage application state and
 * rendering
 */
export class App {
  static readonly CANVAS_ELEMENT_ID = 'canvas-root';
  static readonly CANVAS_SIZE = 500;

  /**
   * Creaes a canvas element with the needs of the render engine
   * @returns canvas html element
   */
  private static createCanvasElement(): HTMLCanvasElement {
    const canvasElement = document.createElement('canvas');
    canvasElement.classList.add(App.CANVAS_ELEMENT_ID, 'canvas-root');
    canvasElement.id = App.CANVAS_ELEMENT_ID;
    canvasElement.height = App.CANVAS_SIZE;
    canvasElement.width = App.CANVAS_SIZE;
    return canvasElement;
  }

  /**
   * Mount application into the passed element
   * @param rootElement element that will contain application
   */
  public static start(rootElement?: HTMLElement | null): void {
    if (!rootElement) throw new Error("root element can't be undefined");
    const canvasElement = this.createCanvasElement();
    const renderEngine = new RenderEngine({ canvasElement });
    const innerApp = new App({ rootElement, renderEngine });

    rootElement.appendChild(canvasElement);
    innerApp.run();
  }

  private _rootElement: HTMLElement;
  private _renderEngine: RenderEngine;

  constructor(props: AppProps) {
    this._rootElement = props.rootElement;
    this._renderEngine = props.renderEngine;
  }

  public run() {
    console.log('running!');
  }
}
