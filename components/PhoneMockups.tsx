import Image from "next/image";

export function PhoneMockups() {
  return (
    <div
      className="relative mx-auto flex min-h-[28rem] w-full max-w-lg items-center justify-center overflow-visible py-4 sm:min-h-[32rem] lg:min-h-[36rem]"
      aria-label="SwiftCoach app screenshots"
    >
      {/* Soft glow behind devices */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,92,31,0.22)_0%,rgba(255,92,31,0.08)_42%,transparent_70%)]"
      />

      {/* Back phone — workout (peek) */}
      <div className="absolute left-[2%] top-[8%] z-0 w-[46%] max-w-[200px] rotate-[-7deg] opacity-90 sm:left-[4%] sm:w-[44%]">
        <div className="rounded-[1.25rem] border border-[rgba(243,241,237,0.14)] bg-[#26241f] p-[3px] shadow-[0_18px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]">
          <div className="overflow-hidden rounded-[1.05rem] bg-black">
            <Image
              src="/images/swiftcoach-workout.png"
              alt="SwiftCoach workout tracking session"
              width={390}
              height={844}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 40vw, 200px"
            />
          </div>
        </div>
      </div>

      {/* Front phone — dashboard (fully readable) */}
      <div className="relative z-10 ml-[18%] w-[58%] max-w-[250px] rotate-[3deg] sm:ml-[20%] sm:w-[54%] sm:max-w-[270px]">
        <div className="rounded-[1.25rem] border border-[rgba(243,241,237,0.16)] bg-[#26241f] p-[3px] shadow-[0_28px_55px_rgba(0,0,0,0.55),0_0_36px_rgba(255,92,31,0.18),0_0_0_1px_rgba(255,255,255,0.1)]">
          <div className="overflow-hidden rounded-[1.05rem] bg-black">
            <Image
              src="/images/swiftcoach-dashboard.png"
              alt="SwiftCoach client dashboard"
              width={390}
              height={844}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 55vw, 270px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
