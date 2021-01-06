import ApiService from "@/services/api.service";
const url = "ejemplo";
export const ejemploService = {
    getAll() {
        return ApiService.get(url, { slug: "" });
    },
    get(slug) {
        return ApiService.get(url, { slug: slug });
    },
    create(params) {
        return ApiService.post(url, { params: params });
    },
    update(slug, params) {
        return ApiService.update(url, { slug: slug, params: params });
    },
    destroy(slug) {
        return ApiService.delete(url, { slug: slug });
    },
};
export default ejemploService;