import "./FormCard.scss";

interface Props {
  classes?: string | null | undefined;
  children: React.ReactNode;
}

export const FormCard = ({ children, classes }: Props) => {
  return <div className={`form-card ${classes}`}>{children}</div>;
};
