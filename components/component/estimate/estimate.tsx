/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/zrrYbg5pGM8
 */
import Link from 'next/link'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function estimate () {
  return (
    <div className='flex flex-col h-screen'>
      <main className='flex-1 p-8 overflow-auto'>
        <h1 className='text-2xl font-semibold mb-6'>Estimate</h1>
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle>Shipment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <Input className='w-full' placeholder='Origin' type='text' />
              <Input className='w-full' placeholder='Destination' type='text' />
              <Input
                className='w-full'
                placeholder='Weight (in kg)'
                type='number'
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='bg-[#0F2B48] p-4  rounded text-white'>
                    <SelectLabel className='bg-[#13385f] rounded-xl'>
                      Services
                    </SelectLabel>
                    <SelectItem value='express'>Express</SelectItem>
                    <SelectItem value='standard'>Standard</SelectItem>
                    <SelectItem value='economy'>Economy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </CardContent>
        </Card>
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle>Estimated Costs</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-2'>
            <div className='flex justify-between'>
              <div>Service Fee</div>
              <div>$100.00</div>
            </div>
            <div className='flex justify-between'>
              <div>Weight Fee</div>
              <div>$50.00</div>
            </div>
            <Separator />
            <div className='flex justify-between text-lg font-medium'>
              <div>Total</div>
              <div>$150.00</div>
            </div>
          </CardContent>
        </Card>
        <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3'>
          Submit Estimate Request
        </Button>
      </main>
    </div>
  )
}
