import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

interface ActiveLinkProps extends LinkProps {
  children: ReactNode;
}

export default function ActiveLink({
  children,
  href,
  ...props
}: ActiveLinkProps) {
  const router = useRouter()
  const isCurrentPath = router.pathname === href || router.pathname === props.as

  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isCurrentPath ? "text-blue-200" : "text-gray-100",
      )}
    >
      {children}
    </Link>
  )
}
