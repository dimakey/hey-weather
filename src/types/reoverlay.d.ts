type Modal = React.ReactNode | (() => JSX.Element) | string | null;
type Event = "show_modal" | "hide_modal" | "change_modal" | "hide_all";

interface ModalOptions {
  component: Modal;
  props: {};
  modalKey: string;
  type: Event;
}

declare module "reoverlay" {
  interface Reoverlay {
    modals: Map<string, string>;
    snapshots: Map<string, string>;

    /**
     *
     * @param configData
     */
    config: (configData: []) => void;

    /**
     *
     * @param modal
     * @param props
     */
    showModal: (modal: Modal, props?: any) => void;

    /** */
    getSnapshotsArray: <T>() => T[];

    /** */
    hideModal: (modal?: Modal) => void;

    /** */
    hideAll: () => void;

    /** */
    applyModal: (opts: ModalOptions) => void;
  }

  interface ModalWrapperProps {
    children: React.ReactNode;
    wrapperClassName?: string;
    contentContainerClassName?: string;
    onClose?: (event: React.MouseEvent<HTMLElement>) => void;
    animation?:
      | "fade"
      | "zoom"
      | "flip"
      | "door"
      | "rotate"
      | "slideUp"
      | "slideDown"
      | "slideLeft"
      | "slideRight";
  }

  const Reoverlay: Reoverlay;
  const ModalContainer: () => JSX.Element;
  const ModalWrapper: (props: ModalWrapperProps) => JSX.Element;
}
