"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const NewsCard = ({ title, description, link, image, date }) => {
  return (
    <Card className="mt-9 w-96 p-4">
      <CardHeader color="blue-gray" className="relative h-44">
        <Image
          src={image}
          alt="card-image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={link} target="_blank">
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
