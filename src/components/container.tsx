import { cn } from "@/lib/utils";

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};

export default Container;
