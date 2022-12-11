import styles from "../../styles/searchAnimation.module.css";

interface searchAnimationProps {
  children: React.ReactNode;
}

function SearchAnimation({ children }: searchAnimationProps) {
  const stylesObj = (delay: number) => {
    return {
      transitionDelay: `${delay * 50}ms`,
      key: delay,
    };
  };
  return (
    <label htmlFor="search">
      {children!
        .toString()
        .split("")
        .map((letter: string, index: number) => {
          return (
            <span style={stylesObj(index)} key={index}>
              {letter}
            </span>
          );
        })}
    </label>
  );
}

export default SearchAnimation;
