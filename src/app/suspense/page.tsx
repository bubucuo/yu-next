"use client";
import { Suspense, useState } from "react";
import { fetchData } from "../../utils/index";
import User from "../../components/User";
import Num from "../../components/Num";
import Loading from "./loading";

const initialResource = fetchData();

export default function SuspensePage() {
  const [resource, setResource] = useState(initialResource);
  return (
    <Suspense>
      <div>
        <h3>SuspensePage</h3>

        <Suspense fallback={<Loading />}>
          <User resource={resource} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Num resource={resource} />
        </Suspense>

        <button className="btn" onClick={() => setResource(fetchData())}>
          refresh
        </button>
      </div>
    </Suspense>
  );
}
