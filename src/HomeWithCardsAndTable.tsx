"use client";

import React from "react";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import { Avatar } from "@/subframe/components/Avatar";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import { TextField } from "@/subframe/components/TextField";
import { Table } from "@/subframe/components/Table";
import { IconButton } from "@/subframe/components/IconButton";

function HomeWithCardsAndTable() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-12 bg-default-background py-12 overflow-auto">
        <div className="flex w-full flex-col items-start gap-6">
          <span className="w-full text-heading-2 font-heading-2 text-default-font">
            Trending Topics
          </span>
          <div className="flex w-full flex-wrap items-start gap-4">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="x-large"
                  image="https://res.cloudinary.com/subframe/image/upload/v1723780835/uploads/302/kr9usrdgbwp9cge3ab1f.png"
                >
                  A
                </Avatar>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-caption-bold font-caption-bold text-brand-700">
                    FEATURED
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    The Rise of AI in Crypto Trading
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-body font-body text-subtext-color">
                  Explore how artificial intelligence is revolutionizing
                  cryptocurrency trading strategies and market analysis.
                </span>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="x-large"
                  image="https://res.cloudinary.com/subframe/image/upload/v1723780859/uploads/302/hh4s5xjmsigiehqkb1uh.png"
                >
                  A
                </Avatar>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-caption-bold font-caption-bold text-brand-700">
                    NEW
                  </span>
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    DeFi 2.0: The Next Wave
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-body font-body text-subtext-color">
                  Discover the latest innovations in decentralized finance and
                  how they&#39;re reshaping the future of financial systems.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <span className="w-full text-heading-2 font-heading-2 text-default-font">
            Top Performers This Week
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-secondary"
                  icon="FeatherGem"
                  iconRight="FeatherChevronDown"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  All Networks
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={null}>
                      Favorites
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Top Gainers
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Top Losers
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Recently Updated
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
            <Button
              variant="neutral-secondary"
              iconRight="FeatherChevronDown"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              7D
            </Button>
            <TextField label="" helpText="" icon="FeatherSearch">
              <TextField.Input
                placeholder="Filter tokens..."
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
          <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>Token</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Percent Change</Table.HeaderCell>
                  <Table.HeaderCell>Market Cap</Table.HeaderCell>
                  <Table.HeaderCell>Volume</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    1
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 flex-none rounded-md object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1723780719/uploads/302/lf4i2zybfw9xxl56w6ce.png"
                    />
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Bitcoin
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      BTC
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    $43,275.68
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <SubframeCore.Icon
                    className="text-body font-body text-success-700"
                    name="FeatherArrowUp"
                  />
                  <span className="whitespace-nowrap text-body font-body text-success-700">
                    5.23%
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $845.2B
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $28.4B
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    2
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 flex-none rounded-md object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1723780655/uploads/302/vacffcy0kwezmeps1tbv.png"
                    />
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Ethereum
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      ETH
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    $2,475.94
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <SubframeCore.Icon
                    className="text-body font-body text-success-700"
                    name="FeatherArrowUp"
                  />
                  <span className="whitespace-nowrap text-body font-body text-success-700">
                    3.82%
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $298.5B
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $12.7B
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    3
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 flex-none rounded-md object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1723780751/uploads/302/cbaa1tfstfnmksus95et.png"
                    />
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Cardano
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      ADA
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    $0.578
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <SubframeCore.Icon
                    className="text-body font-body text-success-700"
                    name="FeatherArrowUp"
                  />
                  <span className="whitespace-nowrap text-body font-body text-success-700">
                    7.61%
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $20.3B
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $742.1M
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    4
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 flex-none rounded-md object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1723780624/uploads/302/sxocuez05safdpfaztiz.png"
                    />
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Polkadot
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      DOT
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    $7.92
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <SubframeCore.Icon
                    className="text-body font-body text-success-700"
                    name="FeatherArrowUp"
                  />
                  <span className="whitespace-nowrap text-body font-body text-success-700">
                    9.34%
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $9.8B
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $385.6M
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    5
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 flex-none rounded-md object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1723780871/uploads/302/h25wathcuwiid5ulpu1i.png"
                    />
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Chainlink
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      LINK
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    $15.50
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <SubframeCore.Icon
                    className="text-body font-body text-success-700"
                    name="FeatherArrowUp"
                  />
                  <span className="whitespace-nowrap text-body font-body text-success-700">
                    5.42%
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $107.5M
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $37.9
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    6
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 flex-none rounded-md object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1723780853/uploads/302/h3glkflohcjajdl3lah6.png"
                    />
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      GROK
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      GROK
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    $0.014
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <SubframeCore.Icon
                    className="text-body font-body text-success-700"
                    name="FeatherArrowUp"
                  />
                  <span className="whitespace-nowrap text-body font-body text-success-700">
                    8.1%
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $45.1M
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $9.0M
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-neutral-500">
                    7
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 flex-none rounded-md object-cover"
                      src="https://res.cloudinary.com/subframe/image/upload/v1723780696/uploads/302/hxk01sckxtlsjxi4n2dv.png"
                    />
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Subframe
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      SUB
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    $4.21
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <SubframeCore.Icon
                    className="text-body font-body text-success-700"
                    name="FeatherArrowUp"
                  />
                  <span className="whitespace-nowrap text-body font-body text-success-700">
                    5.87%
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $12.1M
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="whitespace-nowrap text-body font-body text-default-font">
                    $3.3M
                  </span>
                </Table.Cell>
              </Table.Row>
            </Table>
            <div className="flex w-full items-center justify-center gap-1 px-4 py-4">
              <div className="flex items-center justify-center gap-1">
                <IconButton
                  icon="FeatherChevronFirst"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  icon="FeatherChevronLeft"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <Button
                  variant="brand-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  1
                </Button>
                <Button
                  variant="neutral-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  2
                </Button>
                <Button
                  variant="neutral-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  3
                </Button>
                <Button
                  variant="neutral-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  4
                </Button>
                <Button
                  variant="neutral-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  5
                </Button>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IconButton
                  icon="FeatherChevronRight"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  icon="FeatherChevronLast"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default HomeWithCardsAndTable;