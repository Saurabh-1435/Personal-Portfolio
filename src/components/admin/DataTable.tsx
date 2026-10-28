import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string | number;
  actions?: (item: T) => React.ReactNode;
}

function DataTable<T>({ columns, data, keyExtractor, actions }: DataTableProps<T>) {
  return (
    <div className="rounded-lg border border-gray-800 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-800 hover:bg-transparent">
            {columns.map((col) => (
              <TableHead key={col.key} className={`text-gray-400 ${col.className || ''}`}>
                {col.header}
              </TableHead>
            ))}
            {actions && <TableHead className="text-gray-400 text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={keyExtractor(item)} className="border-gray-800 hover:bg-gray-900/50">
              {columns.map((col) => (
                <TableCell key={col.key} className={`text-gray-200 ${col.className || ''}`}>
                  {col.render ? col.render(item) : (item as Record<string, unknown>)[col.key] as React.ReactNode}
                </TableCell>
              ))}
              {actions && (
                <TableCell className="text-right">{actions(item)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
