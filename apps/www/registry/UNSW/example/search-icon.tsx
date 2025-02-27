import { zodResolver } from "@hookform/resolvers/zod"
import { Search } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/registry/UNSW/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/registry/UNSW/ui/form"
import { Input } from "@/registry/UNSW/ui/input"
import { Toaster } from "@/registry/UNSW/ui/toaster"
import { useToast } from "@/registry/UNSW/ui/use-toast"

const FormSchema = z.object({
  searchValue: z.string().min(2, {
    message: "Search content must be at least 2 characters.",
  }),
})

export function RoundedSearch() {
  const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchValue: "",
    },
  })

  function onSubmit(data: any) {
    toast({
      title: "Searching:",
      description: <p>{data.searchValue}</p>,
    })
    performGoogleSearch(data.searchValue)
  }

  function performGoogleSearch(query: any) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative mx-auto w-[400px] max-w-lg"
        >
          <FormField
            control={form.control}
            name="searchValue"
            render={({ field }) => (
              <FormItem className="relative flex items-center overflow-hidden rounded-full bg-white shadow-md focus-within:ring-2 focus-within:ring-blue-300">
                <FormControl>
                  <Input
                    placeholder="Search for a degree"
                    {...field}
                    className="h-12 w-full rounded-full border-none px-6 py-4 text-gray-700 focus:ring-0"
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="ghost"
                  className="absolute right-4 top-1/3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white"
                >
                  <Search size={20} className="absolute" />
                </Button>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  )
}

export default RoundedSearch
