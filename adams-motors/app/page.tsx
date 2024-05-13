import { CarCard, CustomFilter, WelcomeHeader, SearchBar, ShowMore, ScrollToTop } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { getCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const allCars = await getCars({
    make: searchParams.manufacturer || '',
    model: searchParams.model || '',
    fuel: searchParams.fuel || '',
    year: searchParams.year || '2023',
    limit: searchParams.limit || 10,
   });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars ;


  return (
    <main className="overflow-hidden">
      <WelcomeHeader />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Cars list
          </h1>
          <p className= "text-gray-500">
             Rent the Best, Drive the Best
            </p>
          </div>
          <div className="home__filters">
          <SearchBar />
          </div>
          <div className="home__filter-container -z-0">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car,index) => (
                  <CarCard key={index} car={car}/>
                ))}
              </div>
              <ShowMore pageNumber={(searchParams.limit || 10) /10} isNext={(searchParams.limit || 10) > allCars.length}/>
            </section>
          ) : (
            <div>
              <h2 className="text-black text-xl font-bold"> Oops , No results </h2>
              <p>{allCars?.message}</p>
              </div>
          )}

      </div>
      <ScrollToTop />
    </main>
  );
}
