import {RowID, RowElement} from "../interface.ts";

export function insertRow(row: RowElement);
export function deleteRow(rowId: number);
export function updateRow(rowId: number, row: RowElement);