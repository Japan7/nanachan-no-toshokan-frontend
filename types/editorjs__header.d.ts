declare module '@editorjs/header' {
  import type { PasteEvent } from '@editorjs/editorjs';

  interface HeaderData {
    text: string;
    level: number;
  }

  interface HeaderConfig {
    placeholder: string;
    levels: number[];
    defaultLevel: number;
  }

  type Tags = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

  interface Level {
    number: number;
    tag: Tags;
    svg: string;
  }

  declare class Header {
    constructor(
      config?: {
        data: HeaderData,
        config: HeaderConfig,
        api: object,
        readOnly: boolean,
      },
    );

    normalizeData(data: HeaderData): HeaderData;

    render(): HTMLHeadingElement;

    renderSettings(): HTMLElement;

    setLevel(level: number): void;

    merge(data: HeaderData): void;

    validate(blockData: HeaderData): boolean;

    save(toolsContent: HTMLHeadingElement): HeaderData;

    static get conversionConfig(): {
      export: string,
      import: string,
    };

    static get sanitize(): {
      level: boolean,
      text: object,
    };

    static get isReadOnlySupported(): boolean;

    get data(): HeaderData;

    set data(data: HeaderData);

    getTag(): HTMLElement;

    get currentLevel(): Level;

    get defaultLevel(): Level;

    get levels(): Level[];

    onPaste(event: PasteEvent): void;

    static get pasteConfig(): {
      tags: Tags,
    };

    static get toolbox(): {
      icon: string,
      title: string,
    }
  }

  export default Header;
}
