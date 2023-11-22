/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DCY91QINAcc
 */
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'

export default function reports () {
  return (
    <main className='flex flex-col min-h-screen p-4 md:p-6 bg-gray-50 dark:bg-gray-800'>
      <h1 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>
        Reports
      </h1>
      <div className='flex flex-col md:flex-row items-center gap-4 mb-4'>
        <Input
          className='flex-grow bg-white dark:bg-gray-700 shadow-none appearance-none pl-8 mb-2 md:mb-0'
          placeholder='Search reports...'
          type='search'
        />
        <Button className='w-full md:w-auto mt-2 md:mt-0 md:ml-auto bg-black text-white'>
          Generate New Report
        </Button>
      </div>
      <div className='overflow-x-scroll md:overflow-x-auto'>
        <div className='border shadow-sm rounded-lg min-w-full p-2 bg-white'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date Generated</TableHead>
                <TableHead>Generated By</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>R#001</TableCell>
                <TableCell>Monthly Sales Report</TableCell>
                <TableCell>November 22, 2023</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconDownload className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>View Report Details</DropdownMenuItem>
                      <DropdownMenuItem>Delete Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <hr />
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>R#001</TableCell>
                <TableCell>Monthly Sales Report</TableCell>
                <TableCell>November 22, 2023</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconDownload className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>View Report Details</DropdownMenuItem>
                      <DropdownMenuItem>Delete Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <hr />
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>R#001</TableCell>
                <TableCell>Monthly Sales Report</TableCell>
                <TableCell>November 22, 2023</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconDownload className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>View Report Details</DropdownMenuItem>
                      <DropdownMenuItem>Delete Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <hr />
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>R#001</TableCell>
                <TableCell>Monthly Sales Report</TableCell>
                <TableCell>November 22, 2023</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconDownload className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>View Report Details</DropdownMenuItem>
                      <DropdownMenuItem>Delete Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}

function IconDownload (prop: any) {
  return (
    <svg
      {...prop}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='7 10 12 15 17 10' />
      <line x1='12' x2='12' y1='15' y2='3' />
    </svg>
  )
}

function IconMorehorizontal (prop: any) {
  return (
    <svg
      {...prop}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <circle cx='12' cy='12' r='1' />
      <circle cx='19' cy='12' r='1' />
      <circle cx='5' cy='12' r='1' />
    </svg>
  )
}