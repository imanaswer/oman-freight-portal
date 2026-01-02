import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Abstract logistics symbol - arrow/flow inspired */}
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <rect
          x="2"
          y="14"
          width="24"
          height="12"
          rx="2"
          className="fill-primary"
        />
        <path
          d="M26 14L38 20L26 26V14Z"
          className="fill-steel"
        />
        <rect
          x="6"
          y="18"
          width="16"
          height="4"
          rx="1"
          className="fill-primary-foreground"
        />
      </motion.svg>
      
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-wider text-primary">
          FAST SHIPPING
        </span>
        <span className="text-xs font-medium tracking-widest text-steel">
          & LOGISTICS
        </span>
      </div>
    </div>
  );
};

export default Logo;
