
interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h1>

      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
}