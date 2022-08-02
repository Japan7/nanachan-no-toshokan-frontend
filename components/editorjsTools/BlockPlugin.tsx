import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs';
import React from 'react';
import { createRoot } from 'react-dom/client';

export interface EditorJSPluginProps<T> {
  initialData: T;
  onDataChange: (newData: T) => void;
}

export default abstract class BlockPlugin<T extends object> implements BlockTool {
  abstract componentFunction: React.FunctionComponent<EditorJSPluginProps<T>>;
  data: T;

  constructor(
    { data }: BlockToolConstructorOptions<T>,
  ) {
    this.data = data;
  }

  render(): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.classList.add('cdx-block');

    const root = createRoot(wrapper);
    const component = React.createElement(
      this.componentFunction,
      {
        initialData: this.data,
        onDataChange: (newData: T) => this.data = newData,
      },
    );
    root.render(component);

    return wrapper;
  }

  save(block: HTMLElement): T {
    return this.data;
  }
};
