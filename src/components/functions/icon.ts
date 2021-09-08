import { createComponent } from 'bitterify/lib/core';
import { Component } from 'bitterify/lib/core/classes';

export function icon(path: string, iconClass = 'h-6 w-6'): Component {
  const Svg = createComponent('svg');
  const SvgHtmlElement = Svg.getHtmlElement();
  if (SvgHtmlElement instanceof HTMLElement) {
    SvgHtmlElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="${iconClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${path}" />
</svg>`;
  }
  return Svg;
}
