import { BrowseDirection } from "node-opcua-data-model";

export function adjustBrowseDirection(
  browseDirection: BrowseDirection | null | undefined,
  defaultValue: BrowseDirection
) {
    if (browseDirection === null || browseDirection === undefined) {
        return defaultValue;
    }
    return browseDirection;
}
