import { cn } from "@/lib/utils";

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return (
        <div className={cn("mx-auto max-w-screen-2xl px-4 md:px-6", className)}>
            {children}
        </div>
    );
};

export default Container;
