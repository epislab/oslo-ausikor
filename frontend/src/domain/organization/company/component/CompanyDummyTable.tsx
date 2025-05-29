import * as React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import "../../www/config/muiLicense";

const columns: GridColDef[] = [
    { field: "id", headerName: "No", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "phone", headerName: "Phone", width: 200 },
];

const rows: GridRowsProp = [
    { id: 1, name: "Lorem Ipsum", phone: "010-1234-5678" },
    { id: 2, name: "Ipsum Dolor", phone: "010-2345-6789" },
    { id: 3, name: "Sit Amet", phone: "010-3456-7890" },
    { id: 4, name: "Consectetur", phone: "010-4567-8901" },
    { id: 5, name: "Adipiscing", phone: "010-5678-9012" },
];

export default function CompanyDummyTable() {
    return (
        <div className="w-full max-w-xl mx-auto mt-8">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5]}
                autoHeight
                className="bg-white rounded-lg shadow"
                hideFooterPagination
            />
        </div>
    );
}
