import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function CreateOnCampusLogo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logos/createoncampus.png"
      alt="CreateOnCampus"
      width={220}
      height={44}
      className={`h-8 w-auto object-contain md:h-9 ${className}`}
      priority
    />
  );
}

export function CreateVentureLogo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logos/create.png"
      alt="create"
      width={184}
      height={77}
      className={`h-9 w-auto object-contain md:h-10 ${className}`}
    />
  );
}

export function AarambhLogo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logos/aarambh.png"
      alt="aarambh"
      width={199}
      height={48}
      className={`h-9 w-auto object-contain md:h-10 ${className}`}
    />
  );
}
