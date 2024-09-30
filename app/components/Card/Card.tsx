import "./Card.scss";

interface Props {
  classes?: string | null | undefined;
  children: React.ReactNode;
}

export const Card = ({ children, classes }: Props) => {
  return <div className={`login-card ${classes}`}>{children}</div>;
};
