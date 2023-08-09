export type containerOptions = {
  id: string;
};

export const destroyContainer = ({ id }: containerOptions): void => {
  const portalContainer = document.getElementById(id);

  if (!portalContainer) {
    return;
  }

  portalContainer.remove();
};
