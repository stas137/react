import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  id: string;
  children: React.ReactNode;
}

export const PORTAL_ERROR =
  'There is no portal container in markup. Please add portal container';

export const Portal = (props: PortalProps) => {
  const { id, children } = props;

  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error(PORTAL_ERROR);
      }

      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};
