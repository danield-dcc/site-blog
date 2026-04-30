interface AvatarTitleProps {
  children: React.ReactNode;
}

export function AvatarTitle({ children }: AvatarTitleProps) {
  return <strong className="text-body-xm text-gray-200">{children}</strong>;
}
