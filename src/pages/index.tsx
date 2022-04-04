import * as React from "react";
import type { InferGetStaticPropsType } from "next";
import { Data } from "../types";
import { Card } from "../components/card";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { FilterForm } from "../components/filter-form";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { generateData, filterItems, generateLocationsData } from "../utils";
import Head from "next/head";

export const getStaticProps = async () => {
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const data: Data[] = generateData(rows);

  const locations = generateLocationsData(data);
  return {
    props: {
      data,
      locations,
    },
  };
};

const Home = ({
  data,
  locations,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [query, setQuery] = React.useState("");
  const [location, setLocation] = React.useState(() => locations[0].value);
  const filteredLocations = React.useMemo(
    () => filterItems({ data, location, query }),
    [data, location, query]
  );

  return (
    <Container maxW="container.xl" pb="10">
      <Head>
        <title>Coworking Spaces list sri lanka</title>
        <meta
          name="description"
          content="Coworking Spaces currently available in sri lanka"
        />
      </Head>
      <Navbar />
      <FilterForm
        setLocation={setLocation}
        location={location}
        locations={locations}
        query={query}
        setQuery={setQuery}
      />
      <SimpleGrid columns={[1, null, 4]} spacing="40px">
        {filteredLocations !== undefined ? (
          <>
            {filteredLocations.map(({ id, ...item }) => (
              <Card key={`card-${id}`} {...item} />
            ))}
          </>
        ) : null}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
