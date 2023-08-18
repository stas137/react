declare module '*.sass';
declare module '*.scss';
declare module '*.css';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
// declare module '*.svg';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}