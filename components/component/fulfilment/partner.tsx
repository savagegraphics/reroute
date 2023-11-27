/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0BtPrt72Hqw
 */
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'

export default function partner () {
  return (
    <div className='grid min-h-screen w-full lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40'></div>
      <div className='flex flex-col'>
        <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-zinc-100/40 px-6 dark:bg-zinc-800/40'>
          <Link className='lg:hidden' href='#'>
            <IconPackage2 className='h-6 w-6' />
            <span className='sr-only'>Home</span>
          </Link>
          <div className='w-full flex-1'>
            <form>
              <div className='relative'>
                <IconSearch className='absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400' />
                <Input
                  className='w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-zinc-950'
                  placeholder='Search delivery partners...'
                  type='search'
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className='rounded-full border border-zinc-200 w-8 h-8 dark:border-zinc-800'
                size='icon'
                variant='ghost'
              >
                <img
                  alt='Avatar'
                  className='rounded-full'
                  height='32'
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover'
                  }}
                  width='32'
                />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          <div className='flex items-center'>
            <h1 className='font-semibold text-lg md:text-2xl'>
              Delivery Partners
            </h1>
            <Button className='ml-auto' size='sm'>
              Add Partner
            </Button>
          </div>
          <div className='border shadow-sm rounded-lg'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='max-w-[150px]'>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className='hidden md:table-cell'>
                    Contact
                  </TableHead>
                  <TableHead className='hidden md:table-cell'>
                    Availability
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>Fast Express</TableCell>
                  <TableCell>New York</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    +1 123 456 7890
                  </TableCell>
                  <TableCell>24/7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Reliable Couriers
                  </TableCell>
                  <TableCell>California</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    +1 987 654 3210
                  </TableCell>
                  <TableCell>9am - 5pm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}

function IconBell (props: any) {
  return (
    <svg
      {...props}
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
      <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
      <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
    </svg>
  )
}

function IconDollarsign (props: any) {
  return (
    <svg
      {...props}
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
      <line x1='12' x2='12' y1='2' y2='22' />
      <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
    </svg>
  )
}

function IconSearch (props: any) {
  return (
    <svg
      {...props}
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
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  )
}

function IconPackage (props: any) {
  return (
    <svg
      {...props}
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
      <path d='m7.5 4.27 9 5.15' />
      <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
      <path d='m3.3 7 8.7 5 8.7-5' />
      <path d='M12 22V12' />
    </svg>
  )
}

function IconHome (props: any) {
  return (
    <svg
      {...props}
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
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  )
}

function IconPackage2 (props: any) {
  return (
    <svg
      {...props}
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
      <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
      <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
      <path d='M12 3v6' />
    </svg>
  )
}

function IconTruck (props: any) {
  return (
    <svg
      {...props}
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
      <path d='M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11' />
      <path d='M14 9h4l4 4v4c0 .6-.4 1-1 1h-2' />
      <circle cx='7' cy='18' r='2' />
      <path d='M15 18H9' />
      <circle cx='17' cy='18' r='2' />
    </svg>
  )
}
