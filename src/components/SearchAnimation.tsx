import styles from "../../styles/searchAnimation.module.css";

interface searchAnimationProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

function SearchAnimation({ children }: searchAnimationProps) {
  const stylesObj = (delay: number) => {
    return {
      transitionDelay: `${delay * 50}ms`,
      key: delay,
    };
  };
  return (
    <label>
      {children!
        .toString()
        .split("")
        .map((letter: string, index: number) => {
          return <span style={stylesObj(index)}>{letter}</span>;
        })}
    </label>
  );
}

export default SearchAnimation;
