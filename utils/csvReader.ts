import csvParser from "csv-parser";
import * as fs from "fs";
import * as path from "path";

type Books = {
    title: string;
}

export function readCSV(fileName: string): Promise<any[]> {
    const filePath = path.join(process.cwd(), "test-data", fileName);
    return new Promise((resolve, reject) => {
        const results: any[] = [];
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on("data", (data: Books) => results.push(data))
            .on("end", () => resolve(results))
            .on("error", (error) => reject(error));
    });
}

