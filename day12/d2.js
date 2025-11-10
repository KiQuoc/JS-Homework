const BASE_URL = `https://dummyjson.com`;
const query = {};
const renderPosts = (posts) => {
  const postListEl = document.querySelector(".js-post-list");
  const html = posts
    .map(
     (post) => `
      <div class="border border-gray-400 p-3 mb-3">
        <h2 class="text-2xl font-medium mb-3">${post.title}</h2>
        <p>${post.body}</p>

        <div class="flex mt-2 justify-between items-center">
          <button
            data-id="${post.id}"
            class="js-view border border-gray-400 px-3 py-2 rounded-full cursor-pointer hover:bg-[green] hover:text-white"
          >Xem chi tiết</button>

          <div class="flex gap-2">
            <span data-id="${post.id}" class="js-edit cursor-pointer">Sửa</span>
            <span data-id="${post.id}" class="js-delete cursor-pointer text-red-600">Xóa</span>
          </div>
        </div>
      </div>`
    )
    .join("");
  postListEl.innerHTML = html;


  document.querySelectorAll(".js-edit").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      handleEditPost(id);
    });
  });

  document.querySelectorAll(".js-delete").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      deletePost(id);
    });
  });


  const viewBtnList = postListEl.querySelectorAll(".js-view");
  viewBtnList.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;

      try {
        const res = await fetch(`${BASE_URL}/posts/${id}`);
        const post = await res.json();

        openModal(() => ({
          modalTitle: post.title,
          modalContent: `<p>${post.body}</p>`
        }));
      } catch (error) {
        openModal(() => ({
          modalTitle: "Lỗi",
          modalContent: "<p>Không thể tải bài viết.</p>"
        }));
      }
    });
  });

};
const setLoading = (status = true) => {
  const loadingEl = document.querySelector(".js-loading");
  loadingEl.innerHTML = status
    ? `<span class="text-3xl block text-center">Loading...</span>`
    : "";
};
const renderError = (message) => {
  const postListEl = document.querySelector(".js-post-list");
  postListEl.innerHTML = `<span class="text-3xl block text-center text-red-600 underline">${message}</span>`;
};
const fetchPosts = async () => {
  try {
    //Add loading
    setLoading();
    let url = `${BASE_URL}/posts`;
    if (query.search) {
      url = `${BASE_URL}/posts/search?q=${query.search}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch /posts");
    }
    const { posts } = await response.json();
    renderPosts(posts);
  } catch {
    renderError(`Đã có lỗi khi tải dữ liệu`);
  } finally {
    //Remove loading
    setLoading(false);
  }
};

const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    //rest parameter
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args); //spread
    }, timeout);
  };
};
const addSearchEvent = () => {
  const searchEl = document.querySelector(".js-search");
  searchEl.addEventListener(
    "input",
    debounce((e) => {
      const value = e.target.value;
      //Call api với keyword là value
      query.search = value;
      fetchPosts();
    })
  );
};
const openModal = (callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.remove("hidden");
  const option = callback();
  modalTitle.innerText = option.modalTitle;
  modalConent.innerHTML = option.modalContent;
};
const closeModal = () => {
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.add("hidden");
  modalTitle.innerText = "";
  modalConent.innerText = "";
};

const addEventCloseModal = () => {
  const overlay = document.querySelector(".js-overlay");
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      closeModal();
    }
  });
};
addEventCloseModal();

fetchPosts();
addSearchEvent();
// openModal(() => {
//   return {
//     modalTitle: "Thêm mới bài viết",
//     modalContent: `<p>Xin chào anh em</p>`,
//   };
// });

// --- Mở modal để thêm bài viết ---
// --- Mở modal để thêm bài viết ---
const addNewBtn = document.querySelector(".js-add-new");
addNewBtn.addEventListener("click", () => {
  openModal(() => ({
    modalTitle: "Thêm bài viết",
    modalContent: `
      <form id="createForm">
        <input name="title" class="border border-gray-400 w-full px-3 py-2 mb-3" placeholder="Tiêu đề" />
        <textarea name="body" class="border border-gray-400 w-full px-3 py-2 mb-3" placeholder="Nội dung"></textarea>
        <button type="submit" class="border border-gray-500 px-3 py-2 bg-green-700 text-white cursor-pointer">Thêm mới</button>
      </form>
    `
  }));
});

document.querySelector(".js-modal").addEventListener("submit", async (e) => {
  if (e.target.id === "createForm") {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value.trim();
    const body = form.body.value.trim();

    if (!title || !body) {
      alert("Vui lòng nhập đầy đủ tiêu đề và nội dung!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/posts/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { title,
            body,
            userId: 1 }),
      });

      if (!res.ok) throw new Error("Create failed");

      const newPost = await res.json();
      console.log("Created:", newPost);

      closeModal();
      fetchPosts();

    } catch (err) {

      alert("Có lỗi khi tạo bài viết!");

    } finally {
      setLoading(false);
    }
  }
});


const handleEditPost = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const post = await res.json();

    openModal(() => ({
      modalTitle: "Sửa bài viết",
      modalContent: `
        <form id="editForm">
          <input name="title" value="${post.title}" class="border border-gray-400 w-full px-3 py-2 mb-3"/>
          <textarea name="body" class="border border-gray-400 w-full px-3 py-2 mb-3">${post.body}</textarea>
          <button class="border border-gray-500 px-3 py-2 bg-blue-700 text-white cursor-pointer">Cập nhật</button>
        </form>
      `
    }));

    const editForm = document.querySelector("#editForm");
    editForm.addEventListener("submit", (e) => updatePost(e, id));
  } catch (err) {
    alert("Không thể tải bài viết để sửa!");
  }
};
const updatePost = async (e, id) => {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value.trim();
  const body = form.body.value.trim();

  if (!title || !body) {
    alert("Vui lòng nhập đầy đủ tiêu đề và nội dung!");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        title, 
        body 
      }),
    });

    if (!res.ok) throw new Error("Cập nhật thất bại");

    const updatedPost = await res.json();
    console.log("Updated:", updatedPost);

    closeModal();
    fetchPosts();

  } catch (err) {
    alert("Không thể sửa bài viết!");

  } finally {
    setLoading(false);
  }
};


const deletePost = async (id) => {
  const confirmDelete = confirm("Bạn có chắc chắn muốn xóa bài viết này?");
  if (!confirmDelete) return;

  try {
    setLoading(true);

    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Xóa thất bại !");

    const deletedPost = await res.json();
    console.log("Deleted:", deletedPost);

    fetchPosts();
  } catch (err) {
    alert("Không thể xóa bài viết!");

  } finally {
    setLoading(false);
  }
};

