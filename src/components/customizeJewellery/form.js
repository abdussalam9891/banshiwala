export function createCustomizeJewelleryForm() {
  return `
<form
  id="customJewelleryForm"
  class="space-y-10"
>

  <!-- Basic Information -->

  <section>

    <h3
      class="
        mb-6

        font-serif
        text-3xl

        text-[#181818]
      "
    >
      Your Details
    </h3>

    <div
      class="
        grid
        gap-6

        md:grid-cols-2
      "
    >

      <!-- Name -->

      <div>

        <label
          for="customerName"
          class="
            mb-2
            block

            text-sm
            font-medium

            text-[#181818]
          "
        >
          Full Name
          <span class="text-[#A07936]">*</span>
        </label>

        <input
          id="customerName"
          name="name"
          type="text"
          autocomplete="name"
          placeholder="Enter your name"

          class="
            w-full

            rounded-xl

            border
            border-[#DDDDDD]

            bg-white

            px-5
            py-4

            text-[15px]

            outline-none

            transition-all
            duration-300

            focus:border-[#A07936]
            focus:ring-2
            focus:ring-[#A07936]/10
          "
        >

      </div>

      <!-- Phone -->

      <div>

        <label
          for="customerPhone"
          class="
            mb-2
            block

            text-sm
            font-medium

            text-[#181818]
          "
        >
          Phone Number
          <span class="text-[#A07936]">*</span>
        </label>

        <input
          id="customerPhone"
          name="phone"
          type="tel"
          autocomplete="tel"

          placeholder="+91 XXXXX XXXXX"

          class="
            w-full

            rounded-xl

            border
            border-[#DDDDDD]

            bg-white

            px-5
            py-4

            text-[15px]

            outline-none

            transition-all
            duration-300

            focus:border-[#A07936]
            focus:ring-2
            focus:ring-[#A07936]/10
          "
        >

      </div>

      <!-- Email -->

      <div>

        <label
          for="customerEmail"
          class="
            mb-2
            block

            text-sm
            font-medium

            text-[#181818]
          "
        >
          Email Address
        </label>

        <input
          id="customerEmail"
          name="email"
          type="email"
          autocomplete="email"

          placeholder="abc@example.com"

          class="
            w-full

            rounded-xl

            border
            border-[#DDDDDD]

            bg-white

            px-5
            py-4

            text-[15px]

            outline-none

            transition-all
            duration-300

            focus:border-[#A07936]
            focus:ring-2
            focus:ring-[#A07936]/10
          "
        >

      </div>

      <!-- Jewellery Type -->

      <div>

        <label
          class="
            mb-2
            block

            text-sm
            font-medium

            text-[#181818]
          "
        >
          Jewellery Type
          <span class="text-[#A07936]">*</span>
        </label>

        <select
          id="jewelleryType"
          name="type"

          class="
            w-full

            rounded-xl

            border
            border-[#DDDDDD]

            bg-white

            px-5
            py-4

            text-[15px]

            outline-none

            transition-all
            duration-300

            focus:border-[#A07936]
            focus:ring-2
            focus:ring-[#A07936]/10
          "
        >

          <option value="">
            Select Jewellery
          </option>

          <option value="Ring">
            Ring
          </option>

          <option value="Chain">
            Chain
          </option>

          <option value="Bracelet">
            Bracelet
          </option>

          <option value="Pendant">
            Pendant
          </option>

          <option value="Earrings">
            Earrings
          </option>

          <option value="Anklet">
            Anklet
          </option>

          <option value="Other">
            Other
          </option>

        </select>

      </div>

    </div>

  </section>



    <!-- Design Details -->

  <section>

    <h3
      class="
        mb-6

        font-serif
        text-3xl

        text-[#181818]
      "
    >
      Design Details
    </h3>

    <!-- Budget -->

    <div>

      <label
        class="
          mb-4
          block

          text-sm
          font-medium

          text-[#181818]
        "
      >
        Budget
      </label>

      <div
        id="budgetGroup"

        class="
          flex
          flex-wrap
          gap-3
        "
      >

        <label
          class="
            cursor-pointer
          "
        >

          <input
            type="radio"
            name="budget"
            value="Under ₹10k"
            class="peer hidden"
          >

          <span
            class="
              inline-flex
              rounded-full

              border
              border-[#D8D8D8]

              px-5
              py-3

              text-sm

              transition-all

              peer-checked:border-[#A07936]
              peer-checked:bg-[#A07936]
              peer-checked:text-white

              hover:border-[#A07936]
            "
          >
            Under ₹10k
          </span>

        </label>

        <label class="cursor-pointer">

          <input
            type="radio"
            name="budget"
            value="₹10k-25k"
            class="peer hidden"
          >

          <span
            class="
              inline-flex
              rounded-full

              border
              border-[#D8D8D8]

              px-5
              py-3

              text-sm

              transition-all

              peer-checked:border-[#A07936]
              peer-checked:bg-[#A07936]
              peer-checked:text-white

              hover:border-[#A07936]
            "
          >
            ₹10k – ₹25k
          </span>

        </label>

        <label class="cursor-pointer">

          <input
            type="radio"
            name="budget"
            value="₹25k-50k"
            class="peer hidden"
          >

          <span
            class="
              inline-flex
              rounded-full

              border
              border-[#D8D8D8]

              px-5
              py-3

              text-sm

              transition-all

              peer-checked:border-[#A07936]
              peer-checked:bg-[#A07936]
              peer-checked:text-white

              hover:border-[#A07936]
            "
          >
            ₹25k – ₹50k
          </span>

        </label>

        <label class="cursor-pointer">

          <input
            type="radio"
            name="budget"
            value="₹50k+"
            class="peer hidden"
          >

          <span
            class="
              inline-flex
              rounded-full

              border
              border-[#D8D8D8]

              px-5
              py-3

              text-sm

              transition-all

              peer-checked:border-[#A07936]
              peer-checked:bg-[#A07936]
              peer-checked:text-white

              hover:border-[#A07936]
            "
          >
            ₹50k+
          </span>

        </label>

      </div>

    </div>

    <!-- Occasion -->

    <div class="mt-8">

      <label
        class="
          mb-3
          block

          text-sm
          font-medium

          text-[#181818]
        "
      >
        Occasion
      </label>

      <select
        id="occasion"
        name="occasion"

        class="
          w-full

          rounded-xl

          border
          border-[#DDDDDD]

          bg-white

          px-5
          py-4

          outline-none

          transition-all

          focus:border-[#A07936]
          focus:ring-2
          focus:ring-[#A07936]/10
        "
      >

        <option value="">
          Select Occasion
        </option>

        <option>Wedding</option>

        <option>Engagement</option>

        <option>Birthday Gift</option>

        <option>Anniversary</option>

        <option>Personal Wear</option>

        <option>Festival</option>

        <option>Other</option>

      </select>

    </div>

    <!-- Inspiration Upload -->

    <div class="mt-8">

      <label
        class="
          mb-3
          block

          text-sm
          font-medium

          text-[#181818]
        "
      >
        Inspiration Images
      </label>

      <label
        for="referenceImages"

        class="
          flex

          cursor-pointer

          flex-col
          items-center
          justify-center

          rounded-2xl

          border-2
          border-dashed
          border-[#D8D8D8]

          px-8
          py-8

          text-center

          transition-all
          duration-300

          hover:border-[#A07936]
          hover:bg-[#FCFAF5]
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.6"
          class="mb-4 h-10 w-10 text-[#A07936]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 16V4m0 0l-4 4m4-4l4 4M5 20h14"
          />
        </svg>

        <p
          class="
            font-medium
            text-[#181818]
          "
        >
          Upload Inspiration Photos
        </p>

        <p
          class="
            mt-2

            text-sm

            text-[#7A7A7A]
          "
        >
          JPG, PNG or WEBP
        </p>

        <input
          id="referenceImages"
          name="referenceImages"

          type="file"

          accept="image/*"

          multiple

          class="hidden"
        >

      </label>

    </div>

  </section>



  <!-- Description -->

<section>

  <h3
    class="
      mb-6

      font-serif
      text-3xl

      text-[#181818]
    "
  >
    Tell Us About Your Vision
  </h3>

  <textarea
    id="designDescription"
    name="description"

    rows="7"

    placeholder="Describe your idea, preferred style, engraving, gemstone, finish, size, or anything you'd like our craftsmen to know."

    class="
      w-full

      resize-none

      rounded-2xl

      border
      border-[#DDDDDD]

      px-6
      py-5

      text-[15px]
      leading-7

      outline-none

      transition-all
      duration-300

      focus:border-[#A07936]
      focus:ring-2
      focus:ring-[#A07936]/10
    "
  ></textarea>

</section>


<!-- Terms -->

<label
  class="
    flex
    items-start
    gap-3
  "
>

  <input
    id="agreeTerms"
    name="agreeTerms"

    type="checkbox"

    class="
      mt-1

      h-5
      w-5

      accent-[#A07936]
    "
  >

  <span
    class="
      text-sm
      leading-7

      text-[#666]
    "
  >
    I agree that Banshiwala may contact me regarding my custom jewellery request.
  </span>

</label>

<!-- CTA -->

<div
  class="
    pt-2
  "
>

  <button

    type="submit"

    class="
      group

      relative

      flex
      w-full

      items-center
      justify-center

      overflow-hidden

      rounded-xl

      bg-[#181818]

      px-8
      py-5

      text-[13px]
      font-medium

      uppercase

      tracking-[0.35em]

      text-white

      transition-all
      duration-500
    "
  >

    <span
      class="
        absolute
        inset-0

        origin-left
        scale-x-0

        bg-[#A07936]

        transition-transform
        duration-500

        group-hover:scale-x-100
      "
    ></span>

    <span
      class="
        relative
        z-10
      "
    >
      Request Consultation
    </span>

  </button>

</div>



</form>
`;
}




