/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/AFrHtYWndIq
 */
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Component () {
  return (
    <div className='min-h-screen flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-2xl sm:mx-auto text-center'>
        <span className='text-4xl font-bold mt-4'>Welcome to your account</span>
        <div className='relative mt-6 bg-white shadow-2xl sm:rounded-lg text-left divide-y divide-gray-200'>
          <div className='h-2 bg-[#0F2B48] rounded-t-md' />
          <div className='px-4 sm:px-8 py-6'>
            <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
              Withdrawal Details
            </h2>
            <label
              className='block text-lg font-medium text-gray-700'
              htmlFor='amount'
            >
              Withdrawal Amount
            </label>
            <Input
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
              id='amount'
              type='number'
            />
            <label
              className='block mt-4 text-lg font-medium text-gray-700'
              htmlFor='account'
            >
              Withdraw to Account
            </label>
            <Input
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
              id='account'
              placeholder='Enter account number'
              type='text'
            />
            <label
              className='block mt-4 text-lg font-medium text-gray-700'
              htmlFor='date'
            >
              Withdrawal Date
            </label>
            <Input
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
              id='date'
              type='date'
            />
            <Button
              className='mt-8 w-full bg-[#0F2B48] text-white'
              variant='outline'
            >
              Confirm withdrawal
            </Button>
          </div>
          <div className='px-4 sm:px-8 py-6 bg-gray-50'>
            <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
              Transaction Summary
            </h2>
            <p className='text-lg text-gray-600'>
              Please review your withdrawal details before confirming. If you
              have any questions or concerns, please contact our customer
              service for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
