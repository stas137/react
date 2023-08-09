export type containerOptions = {
  id: string;
  mountNode?: HTMLElement;
};

export const createContainer = (options: containerOptions): void => {
  if (document.getElementById(options.id)) {
    return;
  }

  const { id, mountNode = document.body } = options;

  const portalContainer = document.createElement('div');
  portalContainer.setAttribute('id', id);
  portalContainer.setAttribute('data-testid', `${id}`);

  mountNode.appendChild(portalContainer);
};
