export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  colorClass?: string;
  styleClass?: string;
}

export interface PostProps {
  id?: number;
  userId: number;
  title: string;
  content: string;
}
