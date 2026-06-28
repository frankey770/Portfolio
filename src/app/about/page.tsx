import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { cn } from "@/utils/cn";
import { ButtonX } from "../../components/ui/cvborder";
import Link from "next/link";


function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="h-auto flex relative antialiased bg-neutral-950">
      <div>
        <BackgroundBeams />
      </div>
      <div className="w-screen bg-neutral-950 rounded-l-md flex items-center justify-center p-40 flex-col md:flex-row md:items-start md:gap-[20px] ">
        {/* Your Photo */}
        <img
          src="/courses/Tejmul.jpeg" 
          alt="Your Photo"
          className="rounded-full lg:w-[450px] lg:h-[450px] mx-auto mb-4 z-10 sm:w-auto sm:h-auto"
        />
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            About Me
          </h1>
          <br/>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-left relative z-10">
          


            I'm Tejmul Movin. I love building websites so i started my journey as a Full stack developer and have created several projects. You can find these projects on my GitHub, where I showcase what I've learned and built.

            <br/><br/>

            Apart from coding, I'm really interested in content creation and freelancing. I enjoy sharing what I know and working on real projects for clients. Freelancing helps me grow my skills while helping businesses succeed.

            <br/><br/>

            In my free time, I like reading self-improvement books and playing football. I'm proud to be a two-time national champion in football, and I even captained my Under-14 team for Andhra Pradesh.


            Football has taught me important life skills like leadership, teamwork, and communication—skills I use in both my coding journey and personal life. 🚀


          </p>
          <br/>
          <Link href="https://drive.google.com/file/d/1vneYycRqGgDBlcoESD41Opnabl9tjWTE/view?usp=sharing" target="_blank">
            <ButtonX>Checkout Resume</ButtonX>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default page;
