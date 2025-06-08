"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SelectTab = () => {
  return (
    <>
      <section className="py-10 bg-white">
        <div className="container">
          <div className="w-full max-w-[1100px] mx-auto">
            <Tabs defaultValue="play">
              <TabsList>
                <TabsTrigger value="play">
                  Play
                </TabsTrigger>
                <TabsTrigger value="stay">
                  Stay
                </TabsTrigger>
              </TabsList>
              <TabsContent value="play">
                <div className="flex flex-wrap gap-3">
                  <div className=" basis-full  w-full lg:basis-[calc((100%-142px)/2))] lg:w-[calc((100%-142px)/2)]">
                    <Select className="relative">
                      <SelectTrigger className={'w-full'}>
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className=" basis-full  w-full lg:basis-[calc((100%-142px)/2))] lg:w-[calc((100%-142px)/2)]">
                    <Select className="w-full">
                      <SelectTrigger className={'w-full'}>
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full basis-full lg:basis-[110px]">
                    <Button className="w-full">Book Now</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="stay">
                <div className="flex gap-x-3">
                  <div className="basis-[calc((100%-134px)/2))] w-[calc((100%-134px)/2)]">
                    <Select className="relative">
                      <SelectTrigger className={'w-full'}>
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="basis-[calc((100%-134px)/2)] w-[calc((100%-134px)/2)]">
                    <Select className="w-full">
                      <SelectTrigger className={'w-full'}>
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="basis-[110px]">
                    <Button className="w-full h-12">Book Now</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectTab;
