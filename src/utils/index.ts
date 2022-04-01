import { Data, dataSchema, filterItemsArgs } from "../types";
import type { GoogleSpreadsheetRow } from "google-spreadsheet";

const AllLocations = "All locations";

export function generateData(rows: GoogleSpreadsheetRow[]) {
  const data: Data[] = [];

  for (let index = 0; index < rows.length; index++) {
    const item = rows[index];
    const workplaceData: Data = {
      id: index,
      name: item.Name,
      location: item.Location,
      ...(item["Minimum cost per person (estimate)"] && {
        costMinimum: item["Minimum cost per person (estimate)"],
      }),
      ...(item.Capacity && {
        capacity: item.Capacity,
      }),
      ...(item.Aircon && {
        aircon: item.Aircon,
      }),
      ...(item.WiFi && {
        WiFi: item.WiFi,
      }),
      ...(item["Power port availability"] && {
        powerPortAvailability: item["Power port availability"],
      }),
      ...(item["Work conditions"] && {
        workConditions: item["Work conditions"],
      }),
      ...(item.Hours && {
        hours: item.Hours,
      }),
    };
    const result = dataSchema.safeParse(workplaceData);
    if (result.success) {
      data.push(workplaceData);
    }
  }
  return data;
}

export function generateLocationsData(data: Data[]) {
  const locationBucket = data.map(({ location }) => location);
  locationBucket.unshift(AllLocations);
  const locationUnique = [...new Set(locationBucket)];
  const locations = locationUnique.map((location, index) => ({
    value: location,
    id: index,
  }));
  return locations;
}

export const filterItems = ({ data, location, query }: filterItemsArgs) => {
  let filteredLocations = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const isQueryEmpty = query === "";
    const isAllLocation = location === AllLocations;
    const isMatchesQuery = element.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, ""));

    const isMatchesLocation = element.location
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(location.toLowerCase().replace(/\s+/g, ""));
    if (isQueryEmpty) {
      if (!isAllLocation) {
        if (isMatchesLocation) {
          filteredLocations.push(element);
        }
      }
      if (isAllLocation) {
        filteredLocations.push(element);
      }
    }

    if (!isQueryEmpty) {
      if (isAllLocation) {
        if (isMatchesQuery) {
          filteredLocations.push(element);
        }
      }
      if (!isAllLocation) {
        if (isMatchesQuery && isMatchesLocation) {
          filteredLocations.push(element);
        }
      }
    }
  }
  return filteredLocations;
};
