import { Button } from '@/components/ui/button'
import DropdownMenuDemo from '@/components/ui/dropdown/Dropdown'

export function App() {
  return (
    <div>
      <Button>Primary Button</Button>
      <Button<'a'> href={'google.com'} rel={'noopener noreferrer'} target={'_blank'}>
        Primary Button 2
      </Button>

      {/*<Header />*/}
      {/*<For testing, delete later. Attempt 3/>*/}
      <DropdownMenuDemo />
    </div>
  )
}
