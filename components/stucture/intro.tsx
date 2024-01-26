import { Button } from "../ui/button";

const Intro = () => {
  return (
    <div className="flex flex-col h-full intro_container mt-20 max-md:mt-10">
      <div>
        <p className="intro_line_1">Hi, My name is</p>
      </div>
      <div>
        <p className="intro_line_2">Mohit Kesare.</p>
      </div>
      <div>
        <p className="intro_line_3">I build things for the web.</p>
      </div>
      <div className="para">
        <p className="intro_para">
          I'm a software engineer specializing in building (and occasionally{" "}
          designing) exceptional digital experiences.currently I am focused on
          buliding accesible, human-centered products.
        </p>
      </div>
      <div className="mt-10">
        <Button variant={"resume_btn"} className="re_btn sp_font" size={"lg"}>
          Know more about me
        </Button>
      </div>
    </div>
  );
};

export default Intro;
