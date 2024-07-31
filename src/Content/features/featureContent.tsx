type Feature = {
  id: number;
  tag: string;
  description: string;
  info: string;
};

type MyFeatures = {
  title: string;
  line: string
  features: Feature[];
};

function Content({ id, tag, description, info }: Feature) {
  return (
    <div className="mt-2">
      <img src={tag} alt={description} className="w-[80px] pb-7 mx-auto"/>
      <p className="font-karla pt-4">{description}</p>
      <p className="font-thin pt-2">{info}</p>
    </div>
  );
}

export default function FeaturesLayout({ title,line, features }: MyFeatures) {
  return (
    <>
    <div className="bg-gray-100 ">
    <div className="py-28 w-[1100px] mx-auto">
      <h1 className="text-center font-Raleway font-semibold text-3xl">{title}</h1>
      <div className="border-2 w-[70px] mx-auto border-blue-400 mt-6">{line}</div>
      <div className="flex gap-10 mt-10">
      {features.map((feature) => (
        <Content
          key={feature.id}
          id={feature.id}
          tag={feature.tag}
          description={feature.description}
          info={feature.info}
        />
      ))}
      </div>
      </div>
      </div>
    </>
  );
}
